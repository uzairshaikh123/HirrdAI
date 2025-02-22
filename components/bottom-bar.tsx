import { Button } from "@/components/ui/button"
import { Plus, Calendar, Send } from "lucide-react"

export function BottomBar() {
  return (
    <div className="border-t bg-background p-4 flex justify-between items-center">
      <Button variant="outline" size="sm">
        <Plus className="mr-2 h-4 w-4" /> New Content
      </Button>
      <Button variant="outline" size="sm">
        <Calendar className="mr-2 h-4 w-4" /> Schedule
      </Button>
      <Button variant="outline" size="sm">
        <Send className="mr-2 h-4 w-4" /> Publish
      </Button>
    </div>
  )
}

