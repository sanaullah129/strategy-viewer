import React from 'react';

interface StrategyCardsProps {
    strategies: { [key: string]: string[] };
    selectedDate: string;
}

const StrategyCards: React.FC<StrategyCardsProps> = ({ strategies, selectedDate }) => {
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
                        <p>{count} {count > 1 ? 'Strategies' : 'Strategy'}</p>
                    </div>
                ))
            ) : (
                <p>No strategies available for {selectedDate}</p>
            )}
        </div>
    );
};

export default StrategyCards;
