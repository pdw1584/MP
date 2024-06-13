// 가상의 로그인 상태를 나타내는 변수
let isLoggedIn = false;

// 가상의 로그인된 사용자 데이터
const userData = {
    weight: 70, // 예시 값
    height: 170, // 예시 값
    gender: 'male', // 예시 값
    age: 30, // 예시 값
    activityLevel: 'sedentary' // 예시 값
};

// BMI 계산 함수
function calculateBMI(weight, height) {
    return weight / ((height / 100) ** 2);
}

// BMR 계산 함수
function calculateBMR(gender, weight, height, age) {
    let bmr = 0;
    if (gender === 'male') {
        bmr = 66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age);
    } else if (gender === 'female') {
        bmr = 655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age);
    }
    return bmr;
}

// 활동 수준에 따른 칼로리 소비량 계산 함수
function calculateDailyCalories(bmr, activityLevel) {
    let calories = 0;
    switch (activityLevel) {
        case 'sedentary':
            calories = bmr * 1.2;
            break;
        case 'lightly_active':
            calories = bmr * 1.375;
            break;
        case 'moderately_active':
            calories = bmr * 1.55;
            break;
        case 'very_active':
            calories = bmr * 1.725;
            break;
        case 'extra_active':
            calories = bmr * 1.9;
            break;
        default:
            calories = bmr * 1.2; // 기본값은 보통 활동 수준으로 설정
            break;
    }
    return calories;
}

// 권장 운동량 계산 함수
function calculateActivityLevel(activityLevel) {
    let recommendedActivity = '';
    switch (activityLevel) {
        case '매우 약간':
            recommendedActivity = '주로 앉아서 활동하는 경우';
            break;
        case '약간':
            recommendedActivity = '가벼운 운동 (예: 걷기)';
            break;
        case '보통':
            recommendedActivity = '적당한 운동 (예: 조깅)';
            break;
        case '좋음':
            recommendedActivity = '활발한 운동 (예: 수영, 자전거 타기)';
            break;
        case '매우 좋음':
            recommendedActivity = '매우 활발한 운동 (예: 스포츠)';
            break;
        default:
            recommendedActivity = '보통 활동 수준';
            break;
    }
    return recommendedActivity;
}

// 원 요소
const circle1 = document.getElementById('circle1');
const circle2 = document.getElementById('circle2');
const circle3 = document.getElementById('circle3');

// 마우스를 원 위에 올렸을 때 이벤트
circle1.addEventListener('mouseenter', function() {
    if (isLoggedIn) {
        const bmi = calculateBMI(userData.weight, userData.height);
        circle1.textContent = `BMI: ${bmi.toFixed(2)}`;
    } else {
        circle1.textContent = '로그인해주세요';
    }
});

circle1.addEventListener('mouseleave', function() {
    circle1.textContent = 'bmi';
});

circle2.addEventListener('mouseenter', function() {
    if (isLoggedIn) {
        const bmr = calculateBMR(userData.gender, userData.weight, userData.height, userData.age);
        const dailyCalories = calculateDailyCalories(bmr, userData.activityLevel);
        circle2.textContent = `일일 권장 칼로리: ${dailyCalories.toFixed(2)} kcal`;
    } else {
        circle2.textContent = '로그인해주세요';
    }
});

circle2.addEventListener('mouseleave', function() {
    circle2.textContent = '일일 권장 칼로리';
});

circle3.addEventListener('mouseenter', function() {
    if (isLoggedIn) {
        const recommendedActivity = calculateActivityLevel(userData.activityLevel);
        circle3.textContent = `권장 운동량: ${recommendedActivity}`;
    } else {
        circle3.textContent = '로그인해주세요';
    }
});

circle3.addEventListener('mouseleave', function() {
    circle3.textContent = '권장 운동량';
});
