import umami from '@umami/node';

umami.init({
    websiteId: 'f571d2f3-83a5-4fd3-9fc9-83fa549478dc', // Your website id
    hostUrl: 'https://cloud.umami.is', // URL to your Umami instance
});

export const umamiTrackCheckoutSuccessEvent = async (payload: {
    [key: string]: string | number | Date
}) => {
    await umami.track('checkout_success', payload);
}