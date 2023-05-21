
const change = () => {
    const body = document.getElementById('body');
    const button = document.getElementById('button');

    button.style.display = 'none';
    body.style.background = '#202125';
    document.getElementsByClassName("content")[0].style.setProperty("color", "white", "important");
    document.getElementsByClassName("content")[1].style.setProperty("color", "white", "important");
    document.getElementsByClassName("content")[2].style.setProperty("color", "white", "important");
    document.getElementsByClassName("content")[3].style.setProperty("color", "white", "important");
    document.getElementsByClassName("content")[4].style.setProperty("color", "white", "important");
    document.getElementsByClassName("content")[5].style.setProperty("color", "white", "important");
    document.getElementsByClassName("content")[6].style.setProperty("color", "white", "important");
    document.getElementsByClassName("content")[7].style.setProperty("color", "white", "important");
    document.getElementsByClassName("content")[8].style.setProperty("color", "white", "important");
    document.getElementsByClassName("content")[9].style.setProperty("color", "white", "important");
    document.getElementsByClassName("content")[10].style.setProperty("color", "white", "important");



};

const lightChange = () => {
    window.location.reload();
}
