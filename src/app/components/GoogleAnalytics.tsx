'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function GoogleAnalytics() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '');
        //@ts-expect-error
        window.gtag('event', 'page_view', {
            page_path: url,
            measurement_id: process.env.GOOGLE_ANALYTICS_ID
        });
    }, [pathname, searchParams]);
    return null;
}
