import React from "react";

interface StrategyCardsProps {
  strategies: { [key: string]: string[] };
  selectedDate: string;
}

const StrategyCards: React.FC<StrategyCardsProps> = ({
  strategies,
  selectedDate,
}) => {
  const strategiesForDate = strategies[selectedDate] || [];

  const strategyCounts = strategiesForDate.reduce((acc, strategy) => {
    acc[strategy] = (acc[strategy] || 0) + 1;
    return acc;
  }, {} as { [key: string]: number });

  return (
    <div className="strategy-cards">
      {strategiesForDate.length > 0 ? (
        Object.entries(strategyCounts).map(([strategy, count]) => (
          <div key={strategy} className="strategy-card">
            <h3>{strategy}</h3>
            <p>
            &#x2022; {count} {count > 1 ? "Strategies" : "Strategy"}
            </p>
          </div>
        ))
      ) : (
        <div className="no-strategies">
          <div>
            <p>No strategies available for</p>
            <b>{selectedDate}</b>
          </div>
        </div>
      )}
    </div>
  );
};

export default StrategyCards;
