class SearchView {
  _parentEl = document.querySelector(".search");

  getQuery() {
    const query = this._parentEl.querySelector(".search__field").value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentEl.querySelector(".search__field").value = "";
    this._parentEl.querySelector(".search__field").blur();
  }

  addHandlerSearch(cb) {
    this._parentEl.addEventListener("submit", function (e) {
      e.preventDefault();
      cb();
    });
  }
}

export default new SearchView();
