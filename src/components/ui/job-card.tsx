import React, { useEffect, useState } from 'react';
import * as Separator from '@radix-ui/react-separator';
import { Job } from '@/shared/models';

type JobCardProps = Job;

const JobCard: React.FC<JobCardProps> = ({
    title,
    source,
    url,
    company_id,
    technical_skills,
    work_skills,
}) => {
    return (
        <div className="w-full min-w-fit bg-slate-500 p-4 rounded-md">
            <div className="text-black text-[15px] leading-5 font-medium">{title}</div>
            <div className="text-black text-[15px] leading-5"> {company_id} </div>
            <Separator.Root className="bg-black data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-2" />
            <div className="flex h-5 items-center">
                <div className="text-black text-[15px] leading-5">Analysis</div>
                <Separator.Root
                    className="bg-black data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mx-3"
                    decorative
                    orientation="vertical"
                />
                <div className="text-black text-[15px] leading-5">{source}</div>
                <Separator.Root
                    className="bg-black data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mx-3"
                    decorative
                    orientation="vertical"
                />
                <div className="text-black text-[15px] leading-5"><a href={url}>link</a></div>
            </div>
        </div>
    )
};

export default JobCard;