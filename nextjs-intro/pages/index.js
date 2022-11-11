import { useEffect, useState } from 'react';
import MyHead from '../components/MyHead';
import { useRouter } from 'next/router';
import head from 'next/head';

export default function main() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/home');
    }, 2000);
  });

  return (
    <div>
      <MyHead title="Netflix" />

      <div className="logo">
        <div className="netflix">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <style jsx>
        {`
          body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: #000;
          }
          .logo {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .netflix {
            width: 320px;
            height: 520px;
            overflow: hidden;
            transform: scale(0.5);
          }
          .netflix:before {
            content: '';
            position: absolute;
            left: 0;
            bottom: -100px;
            width: 100%;
            height: 120px;
            background: #000;
            z-index: 2;
            border-top-left-radius: 100%;
            border-top-right-radius: 100%;
            transform: scaleX(1.5);
          }
          .netflix:after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 400%;
            height: 100%;
            background: linear-gradient(to right, transparent, #000, #000);
            z-index: 3;
            animation: appear 2s ease-in forwards;
          }
          @keyframes appear {
            0% {
              right: 0;
            }
            100% {
              right: -500%;
            }
          }

          .netflix span {
            position: absolute;
            top: 0;
            width: 120px;
            background: #fff;
          }
          @keyframes TopToBottom {
            from {
              height: 0%;
            }
            to {
              height: 100%;
            }
          }

          @keyframes BottomToTop {
            from {
              bottom: 0;
              height: 0;
            }
            to {
              bottom: 0;
              height: 100;
            }
          }

          .netflix span:nth-child(1) {
            background: #b00612;
            left: 0;
            animation: TopToBottom 0.5s ease-in forwards;
            animation-delay: 1s;
          }

          .netflix span:nth-child(2) {
            background: #e50815;
            left: 116px;
            z-index: 1;
            transform-origin: bottom-right;
            transform: skewX(25deg);
            box-shadow: 0 0 40px rgba(0, 0, 0, 1);
            animation: BottomToTop 0.5s ease-in forwards;
            animation-delay: 0.5s;
          }
          .netflix span:nth-child(3) {
            background: #b00612;
            right: 10px;
            animation: TopToBottom 0.5s ease-in forwards;
          }
        `}
      </style>
    </div>
  );
}
