import { type FC, type ReactNode } from 'react';
import CourseGoal from './CourseGoal.tsx';
import { type CourseGoal as CourseGoalType } from '../App.tsx';
import InfoBox from './InfoBox.tsx';

type CourseGoalListProps = {
  goals: CourseGoalType[];
  onDeleteGoal: (id: number) => void;
};

const CourseGoalList: FC<CourseGoalListProps> = ({ goals, onDeleteGoal }) => {
  if (goals.length === 0) {
    return <InfoBox mode='hint'>You have no goals yet. Start adding</InfoBox>;
  }

  let waningBox: ReactNode;

  if (goals.length >= 4) {
    waningBox = (
      <InfoBox mode='warning' severity='high'>
        Too many goals. Better to stick with 3 goals
      </InfoBox>
    );
  }
  return (
    <>
      {waningBox}
      <ul>
        {goals.map((goal) => {
          return (
            <li key={goal.id}>
              <CourseGoal
                id={goal.id}
                title={goal.title}
                onDelete={onDeleteGoal}>
                <p>{goal.description}</p>
              </CourseGoal>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CourseGoalList;
