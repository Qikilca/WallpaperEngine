const container = document.getElementById('container');

console.log(container.clientWidth);
console.log(window.outerWidth);


// const textElement = document.getElementById('yutext');
// let position = 100; // 初期位置

// function animate() {
//     position -= 1; // 1ピクセル左に移動する
//     textElement.style.right = position + '%'; // rightプロパティを更新

//     if (position > 0) {
//         requestAnimationFrame(animate); // 次のフレームの描画を待つ
//     }
//     console.log(position);
// }

const text = document.getElementById("animate-text");
let position = 100; // 初期位置


function flip(element, fliped) {
    if (fliped) {
        element.style.transform = "scaleX(-1)";
    } else {
        element.style.transform = "scaleX(1)";
    }
}

flip(text, false);


function rotateX(element, angle) {
    const transformStyles = element.style.transform.split(" ");
    const rotateXStyle = transformStyles.find((style) => style.startsWith("rotateX"));

    // reoteXがあれば、その値を更新する
    if (rotateXStyle) {
        const rotateXIndex = transformStyles.indexOf(rotateXStyle);
        transformStyles[rotateXIndex] = `rotateX(${angle}deg)`;
    } else {
        transformStyles.push(`rotateX(${angle}deg)`);
    }

    console.log(transformStyles);
    element.style.transform = transformStyles.join(" ");
}

function rotateY(element, angle) {
    const transformStyles = element.style.transform.split(" ");
    const rotateYStyle = transformStyles.find((style) => style.startsWith("rotateY"));

    // reoteYがあれば、その値を更新する
    if (rotateYStyle) {
        const rotateYIndex = transformStyles.indexOf(rotateYStyle);
        transformStyles[rotateYIndex] = `rotateY(${angle}deg)`;
    } else {
        transformStyles.push(`rotateY(${angle}deg)`);
    }

    console.log(transformStyles);
    element.style.transform = transformStyles.join(" ");
}

function rotateZ(element, angle) {
    const transformStyles = element.style.transform.split(" ");
    const rotateZStyle = transformStyles.find((style) => style.startsWith("rotateZ"));

    // reoteZがあれば、その値を更新する
    if (rotateZStyle) {
        const rotateZIndex = transformStyles.indexOf(rotateZStyle);
        transformStyles[rotateZIndex] = `rotateZ(${angle}deg)`;
    } else {
        transformStyles.push(`rotateZ(${angle}deg)`);
    }

    console.log(transformStyles);
    element.style.transform = transformStyles.join(" ");
}


function transformStyleUpdate(element, styleName, value) {
    const transformStyles = element.style.transform.split(" ");
    const style = transformStyles.find((style) => style.startsWith(styleName));

    // styleがあれば、その値を更新する
    if (style) {
        const styleIndex = transformStyles.indexOf(style);
        transformStyles[styleIndex] = `${styleName}(${value})`;
    } else {
        transformStyles.push(`${styleName}(${value})`);
    }

    console.log(transformStyles);
    element.style.transform = transformStyles.join(" ");
}

function animate(element) {

    transformStyleUpdate(element, "rotateX", "10deg");
    position--; // 位置を更新
    element.style.transform = `translateX(${position}%)`; // 位置を反映

    if (position < -100) {
        position = 100; // 画面端に到達したら初期位置に戻す
    }

    requestAnimationFrame(animate(element)); // 次のフレームの描画を待つ
}

// rotateX(text, 0);
// rotateZ(text, 0);
// rotateY(text, 0);

animate(text); // アニメーションの開始



console.log(text.style.transform);



