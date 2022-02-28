$('.slider').slick({
    autoplay: true, //自動的に動き出すか。初期値はfalse。
    infinite: true, //スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1, //スライドを画面に3枚見せる
    slidesToScroll: 1, //1回のスクロールで3枚の写真を移動して見せる
    speed: 1000,
    prevArrow: '', //矢印部分PreviewのHTMLを変更
    nextArrow: '', //矢印部分NextのHTMLを変更
    dots: false,
    fade: true
});
var image = document.getElementsByClassName('item');
new simpleParallax(image, {
    scale: 1.5
});