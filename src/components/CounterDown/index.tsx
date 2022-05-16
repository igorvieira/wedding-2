import { useEffect, useState } from "react";
import * as S from './styles';


const CounterDown = () => {

const targetTime = new Date("2022-08-20").getTime();

const [currentTime, setCurrentTime] = useState(Date.now());

const timeBetween = targetTime - currentTime;
const seconds = Math.floor((timeBetween / 1000) % 60);
const minutes = Math.floor((timeBetween / 1000 / 60) % 60);
const hours = Math.floor((timeBetween / (1000 * 60 * 60)) % 24);
const days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentTime(Date.now());
  }, 1000);

  return () => clearInterval(interval);
}, []);

  return (
    <>
      <S.ContainerCounterDown>
        <S.ItemCounter>
          <div>
            <span>{days}</span>
          </div>
          <div>
            <span>
              dias
            </span>
          </div>
        </S.ItemCounter>
        <S.ItemCounter>
          <div>
            <span>{hours}</span>
          </div>
          <div>
            <span>
              hrs
            </span>
          </div>
        </S.ItemCounter>
        <S.ItemCounter>
          <div>
            <span>{minutes}</span>
          </div>
          <div>
            <span>
              min
            </span>
          </div>
        </S.ItemCounter>
        <S.ItemCounter>
          <div>
            <span>{seconds}</span>
          </div>
          <div>
            <span>
             s
            </span>
          </div>
        </S.ItemCounter>
      </S.ContainerCounterDown>
    </>
  );
};

export default CounterDown