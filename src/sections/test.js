import React from 'react';

/**
 * Component that returns list of names of people eligible for *thing*, along with a message counting the total number of eligible people, just above the list.
 * 
 * Currently, the component <FormattedLines people={examplePeopleData} /> displays an empty list. Why?
 */

const examplePeopleData = [
  { isEligible: true, name: 'person 1' },
  { isEligible: true, name: 'person 2' },
  { isEligible: false, name: 'person 3' },
  { isEligible: false, name: 'person 4' },
  { isEligible: true, name: 'person 5' },
];

type Props = any;

export const FormattedLines = (props: Props) => {
  let d = props.people.filter((person) => person.isEligible == true);

  const nbr = d.length;
return (
    <div>
      <p>There are {nbr} eligible people, listed below:</p>
      {d.map(x => (<li>{x.name}</li>))}
    </div>
  );
};

/**
 * Usage:
 * <FormattedLines people={examplePeopleData} />
 */