/* ==========================================
   GET TYPICAL RANGE
========================================== */

export const getTypicalRange = (obj) => {

  if (!obj) return "-";

  return `${obj.p25} – ${obj.p75}`;

};

/* ==========================================
   GET BEST
========================================== */

export const getBest = (obj) => {

  if (!obj) return "-";

  return obj.p20;

};

/* ==========================================
   GET MEDIAN
========================================== */

export const getMedian = (obj) => {

  if (!obj) return "-";

  return obj.p50;

};

/* ==========================================
   GET WORST
========================================== */

export const getWorst = (obj) => {

  if (!obj) return "-";

  return obj.p90;

};

/* ==========================================
   GET BOXPLOT DATA
========================================== */

export const getBoxPlotValues = (obj) => {

  if (!obj) return null;

  return {

    best: obj.p20,

    q1: obj.p25,

    median: obj.p50,

    q3: obj.p75,

    worst: obj.p90,

  };

};

/* ==========================================
   FIND MAX VALUE
========================================== */

export const getMaxValue = (data, keys) => {

  let max = 0;

  data.forEach((row) => {

    keys.forEach((key) => {

      if (row[key] && row[key].p90 > max) {

        max = row[key].p90;

      }

    });

  });

  return max;

};

/* ==========================================
   FIND MIN VALUE
========================================== */

export const getMinValue = (data, keys) => {

  let min = Number.MAX_VALUE;

  data.forEach((row) => {

    keys.forEach((key) => {

      if (row[key] && row[key].p20 < min) {

        min = row[key].p20;

      }

    });

  });

  return min === Number.MAX_VALUE ? 0 : min;

};