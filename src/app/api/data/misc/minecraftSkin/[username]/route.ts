export async function GET(
        request: Request,
        { params }: { params: { username: string } }
    ) {
    const username = params.username
    // Helper function to fetch the Mojang profile ID based on the username
    async function getProfileId(username: string): Promise<string | null> {
        const response = await fetch(`https://api.mojang.com/users/profiles/minecraft/${username}`);
        if (response.ok) {
            const data = await response.json();
            return data.id;
        }
        return null;
    }

    // Helper function to fetch the session profile and decode the skin URL
    async function getSkinUrl(profileId: string): Promise<string | null> {
        const response = await fetch(`https://sessionserver.mojang.com/session/minecraft/profile/${profileId}`);
        if (response.ok) {
            const data = await response.json();
            const properties = data.properties.find((prop: any) => prop.name === "textures");
            if (properties) {
                const decoded = JSON.parse(atob(properties.value));
                return decoded.textures.SKIN.url;
            }
        }
        return null;
    }

    try {
        const profileId = await getProfileId(username);
        if (profileId) {
            const skinUrl = await getSkinUrl(profileId);
            return Response.json(skinUrl);
        }
    } catch (error) {
        return Response.json("Failed to fetch skin URL:" + error);
    }
}