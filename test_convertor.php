<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form method="POST">
        <input type="file" name="file" id="file">
        <input type="button" name="submit" id="submit" value="SUBMIT">
    </form>
    <audio src="" id="covertedAudio" controls="true"></audio>
</body>

</html>

<script>
    const Button = document.querySelector('[type="button"][name="submit"][id="submit"]');
    Button.addEventListener("click", (e) => {
        console.log('====================================');
        console.log(e);
        console.log('====================================');
        e.preventDefault();

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer dskjsdr43930934j34934304934n34kkd3d89sdjsdjb349");
        
        const FileInput = document.querySelector('[type="file"][name="file"][id="file"]');

        var formdata = new FormData();
        formdata.append("file", FileInput.files[0], "/C:/Users/srvro/Desktop/Web_Payment_Request_API.mp4.mp4");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch("http://192.168.43.161/AMG/plus_db/api/convert-to-mp3/upload", requestOptions)
            .then(response => response.text())
            .then(result => {
                // console.log(result)
                // var file = new File([result], "vyz.mp3");
                console.log('====================================');
                // console.log(result)
                // console.log(file);
                console.log('====================================');
                const Audio = document.querySelector('[id="covertedAudio"]');
                // var fileUrl = window.URL.createObjectURL(file)
                // Audio.setAttribute("src", fileUrl);
                result = JSON.parse(result);
                $contents = result['response']['file_bits']['file_contents'].join();
                console.log('====================================');
                console.log({"contents": $contents})
                console.log('====================================');
                $contents = atob($contents);
                Audio.setAttribute("src", fileUrl);
            })
            .catch(error => console.log('error', error));
    });
</script>
