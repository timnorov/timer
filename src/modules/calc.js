    const calc = (price = 100) => {
        const calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcSquare = document.querySelector('.calc-square'),
            calcDay = document.querySelector('.calc-day'),
            calcCount = document.querySelector('.calc-count'),
            totalValue = document.getElementById('total');
        let oldTotal = 0;

        const input = document.querySelectorAll('input.calc-item');

        input.forEach(input => input.addEventListener('input', () => 
        input.value = input.value.replace(/\D/g, '')))

            const countSum = () => {
                let total = 0,
                    countValue = 1,
                    dayValue = 1;
                const typeValue = calcType.options[calcType.selectedIndex].value,
                    squareValue = +calcSquare.value;

                if (calcCount.value > 1){
                    countValue += (calcCount.value - 1) / 10;
                }
                
                if (calcDay.value && calcDay.value < 5) {
                    dayValue *= 2;
                } else if (calcDay.value && calcDay.value < 10){
                    dayValue *= 1.5;
                }

                if (typeValue && squareValue) {
                    total = price * typeValue * squareValue * countValue * dayValue;
                } 
                animateValue(totalValue, oldTotal, total, 600);
                oldTotal = total;
                totalValue.textContent = total;
            };

            calcBlock.addEventListener('change', (event) => {
                const target = event.target;

                if (target.matches('select') || target.matches('input')) {
                    countSum();
                }
            });
            function animateValue(totalValue, start, end, duration) {
                let startTimestamp = null;
                const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                totalValue.textContent = Math.floor(progress * (end - start) + start);
                if (progress < 1) {
                window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
            }
    };

    export default calc;