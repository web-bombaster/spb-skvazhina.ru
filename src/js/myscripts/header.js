const headerFixed = () => {
    const header = document.querySelector('.header');
    const heightHeader = header.offsetHeight; // высота хедера
    header.parentElement.style.paddingTop = heightHeader + 'px';
};

headerFixed();
window.addEventListener("resize", headerFixed);