class ReservationDateValidator {
  static isBetweenDate(input) {
    if (Number(input) < 1 || Number(input) > 31) {
      throw new Error();
    }
  }
}
export default ReservationDateValidator;
