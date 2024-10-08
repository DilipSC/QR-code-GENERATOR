import { QrClient } from 'qr-code-generator-sdk'

let new_QR = new QrClient('your_api_key')


const urltxt = document.getElementById('url').value;

let qrParam = {
    frame_name: "no-frame",
    qr_code_text: `${urltxt}`,
    image_format: "JPG",
    qr_code_logo: 'no-logo',
    marker_left_template: 'version1'
}


new_QR.createQR(qrParam).then(response =>{
    var imagelink=response;
    document.getElementById('qrimg').src = imagelink;

} ) 
