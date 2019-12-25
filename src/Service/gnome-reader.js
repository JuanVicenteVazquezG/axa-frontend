class GnomeReader {
  constructor() {
    this.where = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';
  }

  async getAllInfo() {
    try {
      const response = await fetch(this.where);
      const data = await response.json();
      const { Brastlewark } = data;
      return Brastlewark;
    } catch (error) {
      return error;
    }
  }
}

const gnomeReader = new GnomeReader();

export default gnomeReader;
