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
        bmr = 655.1 + (9.563 * weight) + (1.85 * height) - (4.676 * age);
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

// 마우스를 올렸을 때 계산 함수 호출 및 결과를 원 안에 표시
document.getElementById('bmiCircle').addEventListener('mouseover', function() {
    let weight = parseFloat(prompt('체중(kg)을 입력하세요:'));
    let height = parseFloat(prompt('키(cm)를 입력하세요:'));
    if (!isNaN(weight) && !isNaN(height)) {
        let bmi = calculateBMI(weight, height);
        document.getElementById('bmiCircle').innerText = `BMI: ${bmi.toFixed(2)}`;
    }
});

// 마지막 원의 id를 exerciseCircle로 변경하여 해당 원을 가리키도록 함
document.getElementById('exerciseCircle').addEventListener('mouseover', function() {
    let activityLevel = prompt('활동 수준을 입력하세요 (매우 약간, 약간, 보통, 좋음, 매우 좋음):');
    
    if (activityLevel) {
        let recommendedExercise = '';
        switch (activityLevel) {
            case '매우 약간':
                recommendedExercise = '가벼운 산책 30분';
                break;
            case '약간':
                recommendedExercise = '조깅 또는 자전거 타기 60분';
                break;
            case '보통':
                recommendedExercise = '수영 또는 유산소 운동 60분';
                break;
            case '좋음':
                recommendedExercise = '인터벌 트레이닝 또는 농구 60분';
                break;
            case '매우 좋음':
                recommendedExercise = '농구, 축구, 러닝, 하이킹 90분';
                break;
            default:
                recommendedExercise = '적당한 운동을 권장합니다';
                break;
        }
        
        document.getElementById('exerciseCircle').innerText = `추천 운동: ${recommendedExercise}`;
    }
});
document.getElementById('bmrCircle').addEventListener('mouseover', function() {
    let gender = prompt('성별을 입력하세요 (male 또는 female):');
    let weight = parseFloat(prompt('체중(kg)을 입력하세요:'));
    let height = parseFloat(prompt('키(cm)를 입력하세요:'));
    let age = parseInt(prompt('나이를 입력하세요:'));

    if (gender && !isNaN(weight) && !isNaN(height) && !isNaN(age)) {
        let bmr = calculateBMR(gender, weight, height, age);
        document.getElementById('bmrCircle').innerText = `BMR: ${bmr.toFixed(2)} 칼로리`;
    }
});


// usageDays 요소에 대한 마우스 이벤트 처리
const usageDaysElement = document.getElementById('usageDays');

// 마우스를 올렸을 때
usageDaysElement.addEventListener('mouseenter', function() {
    this.innerText = '지금까지 1일 함께 하셨습니다.';
});

// 마우스가 벗어났을 때
usageDaysElement.addEventListener('mouseleave', function() {
    this.innerText = '지금까지 함께 한 날';
});