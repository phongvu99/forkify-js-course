import View from "./View.js";
import PreviewView from "./previewView.js";
import icons from "url:../../img/icons.svg"; // Parcel 2

class BookmarksView extends PreviewView {
  _parentElement = document.querySelector(".bookmarks__list");
  _errorMessage = "No bookmarks yet. Find a nice recipe and bookmark it ;)";
  _message = "VOILA 💥💥💥💥";

  addHandlerRender(cb) {
    window.addEventListener("load", cb);
  }
}

export default new BookmarksView();
