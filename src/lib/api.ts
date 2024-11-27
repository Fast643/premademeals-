interface PostcodeResponse {
  result: {
    postcode: string;
    latitude: number;
    longitude: number;
    admin_district: string;
  };
}

export async function lookupPostcode(postcode: string): Promise<PostcodeResponse> {
  const response = await fetch(`https://api.postcodes.io/postcodes/${postcode}`);
  if (!response.ok) {
    throw new Error('Invalid postcode');
  }
  return response.json();
}