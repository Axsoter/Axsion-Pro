"use client";

import { useEffect, useRef } from "react";
import { SkinViewer, SkinViewerOptions } from "skinview3d";

interface ViewerProps extends React.HTMLAttributes<HTMLCanvasElement> {
    viewerConfig?: ConfigTypes,
}

interface ConfigTypes extends SkinViewerOptions {
    skin: string;
}

export default function MinecraftViewer({ viewerConfig, ...props }: ViewerProps) {
    const viewerRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const processSkin = async (skin: string): Promise<string | null> => {
            try {
                const skinUrl = await fetch(`/api/data/misc/minecraftSkin/${skin}`);;
                return await skinUrl.json();
            } catch (error) {
                console.error("Failed to fetch skin URL:", error);
            }
            return null;
        };

        const loadSkinViewer = async () => {
            const { current } = viewerRef;
            console.log("test")
            if (current && viewerConfig) {
                const skinUrl = await processSkin(viewerConfig.skin);

                if (skinUrl) {
                    console.log(skinUrl)
                    const processedConfig = {
                        ...viewerConfig,
                        skin: skinUrl
                    };

                    const skinViewer = new SkinViewer({
                        canvas: current,
                        width: 300,
                        height: 400,
                        ...processedConfig
                    });
                    skinViewer.autoRotate = true;
                }
            }
        };

        loadSkinViewer();
    }, [viewerConfig]);

    return (
        <canvas ref={viewerRef} {...props}></canvas>
    );
}
