import TimeSeries from "../viz/timeseries";
import FusionCharts from "../core/index";
import DataStore from "../datastore";
import {
  between,
  equals,
  less,
  lessEquals,
  greater,
  greaterEquals,
  filter,
  select,
  groupBy,
  pipe,
  sort,
  pivot,
} from "../datastore/operators";
import { aggregatorStore } from "../datastore/aggregators";
import {
  before,
  after,
  parseDate,
  formatDate,
  duration,
  DatetimeUnits,
  Weekdays,
} from "../utils";
(FusionCharts.DataStore = DataStore),
  (FusionCharts.DataStore.Operators = {
    between,
    equals,
    less,
    lessEquals,
    greater,
    greaterEquals,
    filter,
    select,
    groupBy,
    pipe,
    sort,
    pivot,
  }),
  (FusionCharts.Utils = {
    duration,
    before,
    after,
    parseDate,
    formatDate,
    DatetimeUnits,
    Weekdays,
  }),
  (FusionCharts.DataStore.Aggregators = { aggregatorStore });

if (typeof window !== "undefined") {
  window.TimeSeries = TimeSeries;
}

export { TimeSeries };
export default {
  name: "timeseries",
  type: "package",
  requiresFusionCharts: !0,
  extension: (a) => a.addDep(TimeSeries),
};
