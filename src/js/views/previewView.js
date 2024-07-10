import View from "./View.js";
import icons from "url:../../img/icons.svg"; // Parcel 2

export default class PreviewView extends View {
  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join("");
  }

  // preview: result or bookmark
  _generateMarkupPreview(preview) {
    const id = window.location.hash.slice(1);

    return `
    <li class="preview">
        <a class="preview__link ${
          preview.id === id ? "preview__link--active" : ""
        }" href="#${preview.id}">
        <figure class="preview__fig">
            <img src="${preview.image}" alt="${preview.title}" />
        </figure>
        <div class="preview__data">
            <h4 class="preview__title">${preview.title}</h4>
            <p class="preview__publisher">${preview.publisher}</p>
            <div class="preview__user-generated ${preview.key ? "" : "hidden"}">
              <svg>
                <use href="${icons}#icon-user"></use>
              </svg>
            </div>
        </div>
        </a>
    </li>
    `;
  }
}

// export default new PreviewView();
