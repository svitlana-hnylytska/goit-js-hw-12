import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./js/pixabay-api";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from "./js/render-functions";

const form = document.querySelector(".form");
const loadMoreButton = document.querySelector(".load-more");
let page = 1;
let currentQuery = "";

form.addEventListener("submit", async event => {
  event.preventDefault();
  const query = form.elements["search-text"].value.trim();
  if (query === "") {
    return;
  }
  currentQuery = query;
  page = 1;
  clearGallery();
  hideLoadMoreButton();
  showLoader();
  try {
    const data = await getImagesByQuery(currentQuery, page);
    if (data.hits.length === 0) {
      iziToast.error({
        message:
          "Sorry, there are no images matching your search query. Please try again!",
      });
      return;
    }
    createGallery(data.hits);
    const totalPages = Math.ceil(data.totalHits / 15);
    if (page < totalPages) {
      showLoadMoreButton();
    } else {
      iziToast.info({
        message:
          "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch {
    iziToast.error({
      message: "Something went wrong. Please try again later.",
    });
  } finally {
    hideLoader();
  }
});

loadMoreButton.addEventListener("click", async () => {
  page += 1;
  hideLoadMoreButton();
  showLoader();
  try {
    const data = await getImagesByQuery(currentQuery, page);
    createGallery(data.hits);
    const totalPages = Math.ceil(data.totalHits / 15);
    if (page < totalPages) {
      showLoadMoreButton();
    } else {
      iziToast.info({
        message:
          "We're sorry, but you've reached the end of search results.",
      });
    }
    const galleryItem = document.querySelector(".gallery-item");
    if (galleryItem) {
      const cardHeight = galleryItem.getBoundingClientRect().height;
      window.scrollBy({
        top: cardHeight * 2,
        behavior: "smooth",
      });
    }
  } catch {
    iziToast.error({
      message: "Something went wrong. Please try again later.",
    });
  } finally {
    hideLoader();
  }
});