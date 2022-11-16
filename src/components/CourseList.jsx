import React from 'react';
import styled from 'styled-components';
import { HiArrowNarrowRight } from 'react-icons/hi';
import courseImg from '../assets/courseImg.png';
import { cardStyles } from './ReusableStyles';

export default function CourseList() {
  const transactions = [
    {
      image: courseImg,
      name: 'Frontend Development',
    },
  ];
  return (
    <Section>
      <div className='transactions'>
        {transactions.map((transaction) => {
          return (
            <div className='transaction'>
              <div className='transaction__title'>
                <div className='transaction__title__image'>
                  <img src={transaction.image} alt='' />
                </div>
                <div className='title'>
                  <h2>{transaction.name}</h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <a className='view' href='/courseDetail'>
        View Course Detail <HiArrowNarrowRight />
      </a>
    </Section>
  );
}

const Section = styled.section`
  ${cardStyles};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .title {
    h2 {
      color: white;
      font-family: 'Permanent Marker', cursive;
      letter-spacing: 0.3rem;
    }
  }
  .transactions {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
    .transaction {
      display: flex;
      flex-direction: column;
      align-items: center;
      &__title {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        &__image {
          img {
            height: 250px;
            width: 250px
            // border-radius: 3rem;
          }
        }
        &__details {
        }
      }
    }
  }
  .view {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    color: white;
    font-weight: bold;
    margin-top: 1rem;
    gap: 0.5rem;
    svg {
      transition: 0.3s ease-in-out;
      font-size: 1.4rem;
    }
    &:hover {
      svg {
        transform: translateX(0.5rem);
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 375px) {
    .transactions {
      .transaction {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }
    }
  }
`;
