import React from 'react';
import PageHero from '../components/PageHero';

export default function Insights() {
    return (
        <div className="bg-aws-bg text-aws-dark relative w-full overflow-hidden">
            <PageHero
                title="Insights"
                subtitle="Thoughts on design and engineering."
            />
            <div className="max-w-[1400px] mx-auto px-8 py-32 min-h-[50vh] flex items-center justify-center">
                <p className="font-medium text-xl text-aws-text-muted">Journal loading...</p>
            </div>
        </div>
    );
}
