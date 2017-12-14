
const dates = ['1/1/2018', '1/8/2017', '1/15/2017', '1/22/2017', '1/29/2017', '2/5/2017', '2/12/2017', '2/19/2017', '2/26/2017', '3/5/2017', '3/12/2017', '3/19/2017'];

475400	890907	1365907	1899907	2374907	2849907	3442907	3976907	4569907	5044907	5459907	5993907
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
  if (count < 982598) {
    return dates[1];
  }
  if (count < 1508642) {
    return dates[2];
  }
  if (count < 1661574) {
    return dates[3];
  }
  if (count < 1758763) {
    return dates[4];
  }
  if (count < 1424163) {
    return dates[5];
  }
  if (count < 2040490) {
    return dates[6];
  }
  if (count < 2801840) {
    return dates[7];
  }
  if (count < 2634490) {
    return dates[8];
  }
  if (count < 2864837) {
    return dates[9];
  }
  if (count < 3365472) {
    return dates[10];
  }
  if (count < 2803402) {
    return dates[11];
  }
  return null;
}

module.exports.controlDate = controlDate;
