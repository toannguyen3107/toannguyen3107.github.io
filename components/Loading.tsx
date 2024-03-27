import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Divider } from '@nextui-org/react';
import { list_post } from '@/config/post';
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function SkeletonLoading() {
    const className = 'xl:col-span-3 md:col-span-6 mx-auto md:gap-4 mt-4';

    return (
        <div>
            <div className="mt-[3rem] w-4/5 mx-auto drop-shadow-xl contrast-200">
                <p className="font-extrabold text-3xl text-[#d8d8d8] blur-[0.1px] italic">{<Skeleton   baseColor='#333' />}</p>
                <Skeleton count={3}  baseColor='#333' />
            </div>
            <div className="w-4/5 mx-auto mb-[3rem] ">
                <Divider className="my-[3rem]" />
                <p className="font-semibold text-xl text-[#00BFFF] my-[2rem]">Explore</p>
                <div className="md:grid md:grid-cols-12 mt-3">
                    {list_post.map((item, index) => (
                        <div
                            key={index}
                            style={{ cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                            className={className}
                        >
                            <Card className="py-4 bg-[#52525B] border-2 hover:bg-[#71717A] active:bg-[#27272A] w-[200px] h-[300px]">
                                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                    <p className="text-tiny uppercase font-bold mx-auto"><Skeleton baseColor='#333' /></p>
                                    <small className="text-default-500 mx-auto"><Skeleton baseColor='#333' /></small>
                                    <h4 className="font-bold text-large mx-auto"><Skeleton baseColor='#333' /></h4>
                                </CardHeader>
                                <CardBody className="overflow-visible py-2">
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Skeleton circle={true} width={'140px'} height={'140px'} baseColor='#333'/>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}