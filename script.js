const callDetails = {
    line: {
        profilePics: ['profile1.jpg', 'profile2.jpg', 'profile3.jpg', 'profile4.jpg', 'profile5.jpg', 'profile6.jpg', 'profile7.jpg'],
        sounds: 'line.mp3',
        names: ['Liam Smith', 'Emma Johnson', 'นรินทร์ ศรีสุข', 'Emily Brown', 'สุพจน์ กาญจนวัฒน์',
            'Mia Davis', 'Oliver Wilson', 'ธนพล นาคิน', 'Sophia Anderson', 'สุดารัตน์ สมบัติ',
            'อานนท์ เกตุแก้ว', 'Ava Martinez', 'เจนจิรา คงสุข', 'Isabella Moore', 'ณัฐพล ศิริชัย',
            'James Taylor', 'อรทัย บุญรัตน์', 'Amelia White', 'พัชรพล รัตนานนท์', 'Benjamin Harris']
    },
    instagram: {
        profilePics: ['profile8.jpg', 'profile9.jpg', 'profile10.jpg', 'profile11.jpg', 'profile12.jpg', 'profile13.jpg', 'profile14.jpg'],
        sounds: 'instagram-call.mp3',
        names: ['Charlotte Clark', 'ศิรินทร์ บัวบุญ', 'Lucas Lewis', 'พิชชาภา รัตนาภรณ์', 'Ella Robinson',
            'วรากร ศรีไพร', 'Henry Hall', 'สิริกาญจน์ บุญเรือง', 'Grace Walker', 'กิตติพงษ์ ศรีสุวรรณ',
            'Alexander Young', 'ศุภชัย ธรรมสอน', 'Harper King', 'ชลธิชา ทองอยู่', 'Michael Wright',
            'ปณิตา ศรีทอง', 'Evelyn Scott', 'วิชัย ทองมี', 'Jack Green', 'สร้อยสุก กาญจนา']
    },
    messenger: {
        profilePics: ['profile15.jpg', 'profile16.jpg', 'profile17.jpg', 'profile18.jpg', 'profile19.jpg', 'profile20.jpg', 'profile21.jpg'],
        sounds: 'messenger-call.mp3',
        names: ['Lily Adams', 'ภาณุพงศ์ อินทร์แก้ว', 'Daniel Baker', 'วีรชัย เพชรนาค', 'Chloe Nelson',
            'พิมพ์ชนก ศรีสำราญ', 'Matthew Carter', 'สุรีย์พร นวลใย', 'Abigail Mitchell', 'วริศรา สุวรรณ',
            'Mason Perez', 'ชานนท์ ชัยชนะ', 'Scarlett Roberts', 'วีรวัฒน์ แสงทอง', 'Elijah Phillips',
            'ธนกร คำลือ', 'Aria Turner', 'ธีรศักดิ์ นาคะศิริ', 'Logan Parker', 'สุนิสา ภูมิแพน']
    },
    ios: {
        profilePics: ['profile22.jpg', 'profile23.jpg', 'profile24.jpg', 'profile25.jpg', 'profile26.jpg', 'profile27.jpg', 'profile28.jpg'],
        sounds: 'ios-call.mp3',
        names: ['Madison Collins', 'พงศ์ธร ศิริชาติ', 'Dylan Edwards', 'จารุวรรณ คำพิมพ์', 'Mila Stewart',
            'วราพร ทองประเสริฐ', 'Ethan Sanchez', 'พัชรีวรรณ ศรีชัย', 'Hazel Morris', 'ณัฐชยา บัวใหญ่',
            'Jayden Rogers', 'ศักดิ์สิทธิ์ นิลพัฒน์', 'Layla Cook', 'วิษณุ พิริยะ', 'Sebastian Bell',
            'ปวีณา กาญจนบุตร', 'Zoey Murphy', 'อนุสรณ์ ศรีพรรณ', 'Aiden Cooper', 'วาสนา สุทธิรักษ์']
    },

};


function startCall(type) {
    const selection = document.getElementById('selection');
    const callScreen = document.getElementById('call-screen');
    const profilePic = document.getElementById('profile-pic');
    const callerName = document.getElementById('caller-name');
    const callSound = document.getElementById('call-sound');

    const details = callDetails[type];


    const randomPic = details.profilePics[Math.floor(Math.random() * details.profilePics.length)];
    const randomName = details.names[Math.floor(Math.random() * details.names.length)];

    profilePic.src = `images/${randomPic}`;
    callerName.textContent = randomName;
    callSound.src = `sounds/${details.sounds}`;
    callSound.play();


    selection.classList.add('hidden');
    callScreen.classList.remove('hidden');
    callScreen.className = `call-screen ${type}-call`;


    document.querySelector('.video-call').classList.toggle('hidden', type !== 'line');
}

function endCall() {
    const selection = document.getElementById('selection');
    const callScreen = document.getElementById('call-screen');
    const callSound = document.getElementById('call-sound');

    callScreen.classList.add('hidden');
    selection.classList.remove('hidden');
    callSound.pause();
}

function videoCall() {
    alert('Video Call functionality not implemented.');
}
