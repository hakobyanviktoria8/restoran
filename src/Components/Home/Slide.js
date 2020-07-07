import React, { useState } from 'react';
import "./Slide.css";
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

const items = [
    {
        src: 'https://www.itourvn.com/images/easyblog_articles/369/b2ap3_large_best-vietnamese-dishes.jpg',
        altText: 'Visaka Vietnamese Food',
        caption: 'Large best vietnamese dishes'
    },
    {
        src: 'https://www.asiamastertours.com/wp-content/uploads/2018/08/vietnamcuisine1-copy-min.jpg',
        altText: 'NYC Restaurant Review',
        caption: 'Vietnamcuisine dishes'
    },

    {
        src: 'https://duyt4h9nfnj50.cloudfront.net/resized/1543931229557-w2880-41.jpg',
        altText: 'Golden Diner',
        caption: 'Resized dishes'
    },
    {
        src: 'https://www.indochinatour.com/blog/wp-content/uploads/2019/02/vietnam-cuisine.jpg',
        altText: 'Keeping Things Old-Fashioned',
        caption: 'Vietnam cuisine dishes'
    },
    {
        src: 'https://www.shoreexcursions.asia/wp-content/uploads/2018/09/8-Best-Vietnamese-Food-You-Should-Try.jpg',
        altText: 'Diner - Williamsburg ',
        caption: 'Vietnamese Food You Should Try'
    }
];

const Slide = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
};

export default Slide;