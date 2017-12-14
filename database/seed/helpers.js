
const dates = ['1/1/2018', '1/8/2017', '1/15/2017', '1/22/2017', '1/29/2017', '2/5/2017', '2/12/2017', '2/19/2017', '2/26/2017', '3/5/2017', '3/12/2017', '3/19/2017'];

const controlDate = (count) => {
  if (count < 475400) {
    return dates[0];
  }
  if (count < 890907) {
    return dates[1];
  }
  if (count < 1365907) {
    return dates[2];
  }
  if (count < 1899907) {
    return dates[3];
  }
  if (count < 2374907) {
    return dates[4];
  }
  if (count < 2849907) {
    return dates[5];
  }
  if (count < 3442907) {
    return dates[6];
  }
  if (count < 3976907) {
    return dates[7];
  }
  if (count < 4569907) {
    return dates[8];
  }
  if (count < 5044907) {
    return dates[9];
  }
  if (count < 5459907) {
    return dates[10];
  }
  if (count < 5993907) {
    return dates[11];
  }
  return null;
};

const experimentDate = (count) => {
  if (count < 475400) {
    return dates[0];
  }
  if (count < 950693) {
    return dates[1];
  }
  if (count < 1484693) {
    return dates[2];
  }
  if (count < 1899693) {
    return dates[3];
  }
  if (count < 2196693) {
    return dates[4];
  }
  if (count < 2374693) {
    return dates[5];
  }
  if (count < 2671693) {
    return dates[6];
  }
  if (count < 3027693) {
    return dates[7];
  }
  if (count < 3324693) {
    return dates[8];
  }
  if (count < 3561693) {
    return dates[9];
  }
  if (count < 3798693) {
    return dates[10];
  }
  if (count < 4006693) {
    return dates[11];
  }
  return null;
};

module.exports.controlDate = controlDate;
module.exports.experimentDate = experimentDate;
