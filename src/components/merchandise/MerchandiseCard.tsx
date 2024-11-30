import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import { CardOfMerchandise } from "../../helper";
import Image from 'next/image';

const Merchandise: React.FC = () => {
    return (
        <div className="mt-16 flex  space-x-6 ml-[100px]">
            {CardOfMerchandise.map((Merchandise) => (
                <>
                    <Card
                        key={Merchandise.image}
                        className="w-[230px] p-0 overflow-hidden rounded-none"
                    >
                        <CardContent className="p-0">
                            <Image
                                src={Merchandise.image}
                                width={230}
                                height={270}
                                alt={`${Merchandise.image}`}
                                className="w-full h-auto object-cover"
                            />
                        </CardContent>
                        <CardFooter className='mt-4'>
                            <p className='font-semibold '> {Merchandise.title}</p>
                        </CardFooter>
                        <Button className='bg-custom-green w-[113px] rounded-none '>Explore Now</Button>
                    </Card>

                </>
            ))}
        </div>
    );
};

export default Merchandise;
