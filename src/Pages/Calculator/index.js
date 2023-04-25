import React, {useState} from 'react';
import {useForm} from "react-hook-form";

const Calculator = () => {
    const {register, handleSubmit} = useForm()
    const [kkal, setKkal] = useState()

    const submit = (event) => {
        // (10 × вес в килограммах) + (6,25 × рост в сантиметрах) − (5 × возраст в годах)
        const modify = {male: 5, female: -161}
        const result = (10 * event.weight) + (6.25 * event.tall) - (5 * event.age) + modify[event.gender]
        setKkal(result)
    }

    return (
        <div className='calc-form'>

            <h2>
                Калькулятор каллорий
            </h2>

            <h3>
                Калькулятор калорий позволит вам рассчитать то количество энергии, которое необходимо ежедневно
                получать вашему организму в зависимости от вашего роста, веса, возраста и степени
                физической активности (норма калорий). Также этот вариант калькулятора калорий в результате расчёта
                выдаст рекомендации по величине числа калорий, необходимой для снижения веса. Рекомендации по величине
                калорий расписаны в виде примерного графика по дням недели и будут полезны для тех, кто хочет
                понизить свой вес с помощью диеты.
            </h3>

            <form onSubmit={handleSubmit(submit)}>
                <input {...register('age', {required: true, maxLength: 3, pattern: /^[0-9]+$/i})}/> Возраст
                <input type={"radio"} value={'male'} {...register('gender', {required: true})}/> Мужчина
                <input type={"radio"} value={'female'} {...register('gender', {required: true})}/> Женщина
                <input {...register('weight', {required: true, maxLength: 3, pattern: /^[0-9]+$/i})}/>
                <input {...register('tall', {required: true, maxLength: 3, pattern: /^[0-9]+$/i})}/>

            <button>Посчитать каллории</button>


            </form>

            {kkal && <div>{kkal}</div>}

        </div>
    );
};

export default Calculator;