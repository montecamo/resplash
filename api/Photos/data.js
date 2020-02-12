const { RESTDataSource } = require('apollo-datasource-rest');

class PhotosAPI extends RESTDataSource {
  constructor(apiUrl) {
    super();

    this.baseURL = apiUrl;
  }

  willSendRequest(request) {
    request.params.set('client_id', this.context.accessKey);
  }

  async getPhotos(page = 1) {
    return this.get(`photos?page=${page}`);
  }
}

module.exports = PhotosAPI;
