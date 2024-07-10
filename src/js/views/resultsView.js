import View from "./View.js";
import PreviewView from "./previewView.js";
import icons from "url:../../img/icons.svg"; // Parcel 2

class ResultsView extends PreviewView {
  _parentElement = document.querySelector(".results");
  _errorMessage = "No recipes found for your query! Please try again ;)";
  _message = "VOILA 💥💥💥💥";
}

export default new ResultsView();
