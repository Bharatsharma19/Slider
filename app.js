const pictures = document.querySelectorAll(".picture");
var counter = 0;

pictures.forEach((picture, index) => {
  picture.style.top = `${index * 100}%`;
});

const goPrev = () => {
  counter--;
  pictureImage();
};

const goNext = () => {
  counter++;
  pictureImage();
};

const pictureImage = () => {
  pictures.forEach((picture) => {
    picture.style.transform = `translateY(-${counter * 100}%)`;
  });
};
