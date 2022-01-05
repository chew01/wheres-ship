import React, { useEffect, useState } from 'react';
import { findTopTenFastest } from '../firebase.query';
import {
  Background,
  Sheet,
  Title,
  Loading,
  Table,
  Timing,
} from '../components/Scoreboard.styled';

const Scoreboard = () => {
  const [topTen, setTopTen] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  let topTenList;

  const loadList = () => {
    topTenList = topTen.map((entry) => {
      let timing;
      if (entry.timing > 59) {
        const minutes = Math.floor(entry.timing / 60);
        const seconds = entry.timing % 60;
        timing = `${minutes} min ${seconds} s`;
      } else {
        timing = `${entry.timing} s`;
      }

      return (
        <tr key={entry.name + entry.timing}>
          <td>{entry.name}</td>
          <Timing>{timing}</Timing>
        </tr>
      );
    });
  };

  useEffect(() => {
    const loadTopTen = async () => {
      setIsLoading(true);
      const topTenArray = await findTopTenFastest();
      setIsLoading(false);
      setLoaded(true);
      setTopTen(topTenArray);
    };
    loadTopTen();
  }, []);

  loadList();

  return (
    <Background>
      {isLoading ? <Loading>Loading...</Loading> : null}
      {loaded ? (
        <Sheet>
          <Title>High Scores</Title>
          <Table>
            <tbody>{topTenList}</tbody>
          </Table>
        </Sheet>
      ) : null}
    </Background>
  );
};

export default Scoreboard;
