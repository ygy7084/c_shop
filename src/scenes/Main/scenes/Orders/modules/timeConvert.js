export default function timeConvert(s) {
  let second = s;
  if (second <= 0) {
    second = 1;
  }
  const hour = Math.floor((second) / 3600);
  const min = Math.floor((second - (hour * 3600)) / 60);
  const sec = second - (hour * 3600) - (min * 60);
  let result = hour + '시간 ' + min + '분 ' + sec + '초전';
  if (hour === 0 && min === 0) {
    result = sec + '초전';
  } else if (hour === 0) {
    result = min + '분 ' + sec + '초전';
  } else if (min === 0) {
    result = hour + '시간 ' + sec + '초전';
  }
  return result;
}
