import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Car, VideoIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return <>
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
            <div className="container mx-auto px-4 py-16">
                <header className="text-center mb-16">
                    <div className="flex items-center justify-center mb-6">
                        <VideoIcon className="h-12 w-12 text-primary" />
                    </div>
                    <h1 className="text-4xl font-bold mb-4">Family Video Sharing</h1>
                    <p className="text-xl text-gray-300">Share end preserve your precious with family</p>
                </header>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <Card className="p-6 bg-gray-800 border-gray-700">
                        <h2 className="text-2xl font-semibold mb-4">For Families</h2>
                        <ul className="space-y-3 text-gray-300 mb-6">
                            <li>✓ Create your family group</li>
                            <li>✓ Invite family members</li>
                            <li>✓ Share videos securely</li>
                            <li>✓ Manage permissions</li>
                        </ul>
                        <Button asChild className="w-full">
                            <Link href="/login">Get Started</Link>
                        </Button>
                    </Card>

                    <Card className="p-6 bg-gray-800 border-gray-700">
                        <h2 className="text-2xl font-semibold mb-4">Features</h2>
                        <ul className="space-y-3 text-gray-300 mb-6">
                            <li>✓ Secure video storage</li>
                            <li>✓ Family-based access control</li>
                            <li>✓ Easy video management</li>
                            <li>✓ Collaboratice sharing</li>
                        </ul>
                        <Button asChild className="outline">
                            <Link href="/register">Create Account</Link>
                        </Button>
                    </Card>
                </div>
            </div>
        </div>
    </>
}