const sections = document.querySelectorAll("section");
const paragraphs = document.querySelectorAll("p");
const deleteImg = document.querySelector("img");

sections.forEach((section) => {
  section.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  });

  section.addEventListener("drop", function (event) {
    const paragraphID = event.dataTransfer.getData("id");
    const paragraph = document.getElementById(paragraphID);

    this.appendChild(paragraph);
  });
});

paragraphs.forEach((paragraph) => {
  paragraph.addEventListener("dragstart", function (event) {
    const [ghostImage] = document.getElementsByClassName("ghost-image");

    this.classList.add("dragging");
    event.dataTransfer.setData("id", this.getAttribute("id"));
    event.dataTransfer.setDragImage(ghostImage, 0, 0);
  });

  paragraph.addEventListener("dragend", function () {
    this.classList.remove("dragging");
  });
});

deleteImg.addEventListener("dragover", (event) => {
  event.preventDefault();
});

deleteImg.addEventListener("drop", (event) => {
  const paragraphID = event.dataTransfer.getData("id");
  const paragraph = document.getElementById(paragraphID);

  paragraph.parentElement.removeChild(paragraph);
});
