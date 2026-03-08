import React from 'react';

export default function PageHero({ title, subtitle }) {
    return (
        <section className="relative pt-48 pb-24 px-8 lg:px-16 aws-gradient-bg rounded-b-[4rem] overflow-hidden">

            {/* Floating background elements for depth */}
            <div className="absolute right-[5%] top-[20%] w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-aws-accent/20 to-transparent blur-3xl pointer-events-none"></div>

            <div className="relative z-10 max-w-[1400px] mx-auto text-center">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6 uppercase leading-none drop-shadow-sm text-white">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-xl md:text-2xl text-aws-dark font-medium max-w-3xl mx-auto">
                        {subtitle}
                    </p>
                )}
            </div>
        </section>
    );
}
