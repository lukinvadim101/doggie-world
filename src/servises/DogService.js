export default class DogService{
  _apiBase = 'https://dog.ceo/api/breeds'
  async getResource(url){
    const res = await fetch(`${this._apiBase}${url}`)
    if (!res.ok) {
      throw new Error(`No doggie today`)
    }
    return await res.json();
  }

  async getDogList() {
    const res = await this.getResource(`/list/all`)
    return res.message
  }

  async rndDogImg(num = 1){
    const res = await this.getResource(`/image/random/${num}`)
    return res.message
  }
}




