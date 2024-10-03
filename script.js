document.getElementById('uploadForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const photoFile = document.getElementById('photoUpload').files[0];
    const videoFile = document.getElementById('videoUpload').files[0];

    const photoPreview = document.getElementById('photoPreview');
    const videoPreview = document.getElementById('videoPreview');

    // Photo Preview
    if (photoFile) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            photoPreview.innerHTML = '';
            photoPreview.appendChild(img);
        };
        reader.readAsDataURL(photoFile);
    }

    // Video Preview
    if (videoFile) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const video = document.createElement('video');
            video.src = e.target.result;
            video.controls = true;
            videoPreview.innerHTML = '';
            videoPreview.appendChild(video);
        };
        reader.readAsDataURL(videoFile);
    }
});
