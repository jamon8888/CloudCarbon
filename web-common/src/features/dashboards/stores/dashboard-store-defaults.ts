import { LeaderboardContextColumn } from "@rilldata/web-common/features/dashboards/leaderboard-context-column";
import {
  SortDirection,
  SortType,
} from "@rilldata/web-common/features/dashboards/proto-state/derived-types";
import type { MetricsExplorerEntity } from "@rilldata/web-common/features/dashboards/stores/metrics-explorer-entity";
import { getLocalUserPreferences } from "@rilldata/web-common/features/dashboards/user-preferences";
import { getTimeComparisonParametersForComponent } from "@rilldata/web-common/lib/time/comparisons";
import { DEFAULT_TIME_RANGES } from "@rilldata/web-common/lib/time/config";
import { getDefaultTimeGrain } from "@rilldata/web-common/lib/time/grains";
import { ISODurationToTimePreset } from "@rilldata/web-common/lib/time/ranges";
import { isoDurationToFullTimeRange } from "@rilldata/web-common/lib/time/ranges/iso-ranges";
import type { TimeComparisonOption } from "@rilldata/web-common/lib/time/types";
import type {
  V1ColumnTimeRangeResponse,
  V1MetricsView,
} from "@rilldata/web-common/runtime-client";
import { get } from "svelte/store";

export function setDefaultTimeRange(
  metricsView: V1MetricsView,
  metricsExplorer: MetricsExplorerEntity,
  fullTimeRange: V1ColumnTimeRangeResponse | undefined
) {
  // This function implementation mirrors some code in the metricsExplorer.init() function
  if (!fullTimeRange) return;
  const timeZone = get(getLocalUserPreferences()).timeZone;
  const fullTimeStart = new Date(fullTimeRange.timeRangeSummary.min);
  const fullTimeEnd = new Date(fullTimeRange.timeRangeSummary.max);
  const timeRange = isoDurationToFullTimeRange(
    metricsView.defaultTimeRange,
    fullTimeStart,
    fullTimeEnd,
    timeZone
  );
  const timeGrain = getDefaultTimeGrain(timeRange.start, timeRange.end);
  metricsExplorer.selectedTimeRange = {
    ...timeRange,
    interval: timeGrain.grain,
  };
  metricsExplorer.selectedTimezone = timeZone;
  // TODO: refactor all sub methods and call setSelectedScrubRange here
  metricsExplorer.selectedScrubRange = undefined;
  metricsExplorer.lastDefinedScrubRange = undefined;
  setDefaultComparisonTimeRange(metricsView, metricsExplorer, fullTimeRange);
}

function setDefaultComparisonTimeRange(
  metricsView: V1MetricsView,
  metricsExplorer: MetricsExplorerEntity,
  fullTimeRange: V1ColumnTimeRangeResponse | undefined
) {
  const preset = ISODurationToTimePreset(metricsView.defaultTimeRange, true);
  const comparisonOption = DEFAULT_TIME_RANGES[preset]
    ?.defaultComparison as TimeComparisonOption;
  if (!comparisonOption) return;

  const fullTimeStart = new Date(fullTimeRange.timeRangeSummary.min);
  const fullTimeEnd = new Date(fullTimeRange.timeRangeSummary.max);
  const comparisonRange = getTimeComparisonParametersForComponent(
    comparisonOption,
    fullTimeStart,
    fullTimeEnd,
    metricsExplorer.selectedTimeRange.start,
    metricsExplorer.selectedTimeRange.end
  );
  if (!comparisonRange.isComparisonRangeAvailable) return;

  metricsExplorer.selectedComparisonTimeRange = {
    name: comparisonOption,
    start: comparisonRange.start,
    end: comparisonRange.end,
  };
  metricsExplorer.showTimeComparison = true;
  metricsExplorer.leaderboardContextColumn =
    LeaderboardContextColumn.DELTA_PERCENT;
}

export function getDefaultMetricsExplorerEntity(
  name: string,
  metricsView: V1MetricsView,
  fullTimeRange: V1ColumnTimeRangeResponse | undefined
) {
  const metricsExplorer: MetricsExplorerEntity = {
    name,
    selectedMeasureNames: metricsView.measures.map((measure) => measure.name),

    visibleMeasureKeys: new Set(
      metricsView.measures.map((measure) => measure.name)
    ),
    allMeasuresVisible: true,
    visibleDimensionKeys: new Set(
      metricsView.dimensions.map((dim) => dim.name)
    ),
    allDimensionsVisible: true,
    leaderboardMeasureName: metricsView.measures[0]?.name,
    filters: {
      include: [],
      exclude: [],
    },
    dimensionFilterExcludeMode: new Map(),
    leaderboardContextColumn: LeaderboardContextColumn.HIDDEN,
    dashboardSortType: SortType.VALUE,
    sortDirection: SortDirection.DESCENDING,

    showTimeComparison: false,
  };
  // set time range related stuff
  setDefaultTimeRange(metricsView, metricsExplorer, fullTimeRange);
  return metricsExplorer;
}