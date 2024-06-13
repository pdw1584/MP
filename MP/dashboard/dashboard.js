// BMI 계산 함수
function calculateBMI(weight, height) {
    return weight / ((height/100) ** 2);
}

// 원 요소
const circle1 = document.getElementById('circle1');
const circle2 = document.getElementById('circle2');
const circle3 = document.getElementById('circle3');

// 마우스를 원 위에 올렸을 때 이벤트
circle1.addEventListener('mouseenter', function() {
    const weight = prompt("체중(kg)을 입력하세요:");
    const height = prompt("신장(cm)을 입력하세요:");
    
    if (weight && height) {
        const bmi = calculateBMI(weight, height);
        circle1.textContent = `BMI: ${bmi.toFixed(2)}`;
    } else {
        circle1.textContent = '잘못된 입력입니다.';
    }
});

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

// 마우스를 원 위에 올렸을 때 이벤트
circle2.addEventListener('mouseenter', function() {
    const gender = prompt("성별을 입력하세요 (male 또는 female):");
    const weight = parseFloat(prompt("체중(kg)을 입력하세요:"));
    const height = parseFloat(prompt("신장(cm)을 입력하세요:"));
    const age = parseInt(prompt("나이를 입력하세요:"));
    const activityLevel = prompt("활동 수준을 선택하세요 (sedentary, lightly_active, moderately_active, very_active, extra_active):");
    
    if (gender && weight && height && age && activityLevel) {
        const bmr = calculateBMR(gender, weight, height, age);
        const dailyCalories = calculateDailyCalories(bmr, activityLevel);
        circle2.textContent = `일일 권장 칼로리: ${dailyCalories.toFixed(2)} kcal`;
    } else {
        circle2.textContent = '잘못된 입력입니다.';
    }
});


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

// 마우스를 원 위에 올렸을 때 이벤트
circle3.addEventListener('mouseenter', function() {
    const activityLevel = prompt("활동 수준을 선택하세요 (매우 약간, 약간, 보통, 좋음, 매우 좋음):");
    
    if (activityLevel) {
        const recommendedActivity = calculateActivityLevel(activityLevel);
        circle3.textContent = `권장 운동량: ${recommendedActivity}`;
    } else {
        circle3.textContent = '잘못된 입력입니다.';
    }
});
