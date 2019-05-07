const { RESTDataSource } = require('apollo-datasource-rest');

class PhotosAPI extends RESTDataSource {
  constructor(apiUrl) {
    super();

    this.baseURL = apiUrl;
  }

  willSendRequest(request) {
    request.params.set('client_id', this.context.accessKey);
  }

  async getPhotos() {
    return this.get('photos');
  }
}

module.exports = PhotosAPI;
